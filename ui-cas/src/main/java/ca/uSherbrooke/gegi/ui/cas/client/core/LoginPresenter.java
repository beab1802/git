package ca.uSherbrooke.gegi.ui.cas.client.core;

import com.gwtplatform.dispatch.shared.DispatchAsync;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.annotations.NameToken;

import ca.uSherbrooke.gegi.ui.cas.shared.ValideCasTicket;
import ca.uSherbrooke.gegi.ui.cas.shared.ValideCasTicketResult;
import ca.uSherbrooke.gegi.ui.cas.client.event.CasEvent;
import ca.uSherbrooke.gegi.ui.cas.client.place.NameTokens;
import ca.uSherbrooke.gegi.persist.cas.share.Usager;

import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.inject.Inject;
import com.google.gwt.event.logical.shared.CloseEvent;
import com.google.gwt.event.logical.shared.CloseHandler;

//import com.google.gwt.event.shared.EventBus;
import com.google.web.bindery.event.shared.EventBus;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.gwtplatform.mvp.client.proxy.RevealRootContentEvent;


public class LoginPresenter extends
Presenter<LoginPresenter.MyView, LoginPresenter.MyProxy> {

	public interface MyView extends View {
		String getCasUrl();
		String getCasService();		
		String getTicket();
		void setPageWeb(String pageWeb);
		void setTicket();
	}

	private final DispatchAsync dispatcher;
	private final PlaceManager placeManager;
	private final EventBus eventBus;
	
	public static final String nameToken    = "!login";
	public static final String pageWebParam = "pageWeb";
	private String pageWeb;

	@ProxyStandard
	@NameToken(nameToken)
	public interface MyProxy extends ProxyPlace<LoginPresenter> {
	}

	@Inject
	public LoginPresenter(EventBus eventBus, MyView view, MyProxy proxy,
			PlaceManager placeManager, DispatchAsync dispatcher) {
		super(eventBus, view, proxy);
		this.placeManager = placeManager;
		this.dispatcher = dispatcher;
		this.eventBus = eventBus;
	}
	
	 @Override
	  public void prepareFromRequest(PlaceRequest request) {
	    super.prepareFromRequest(request);
	    pageWeb = request.getParameter(pageWebParam, null);
	  }

	@Override
	protected void revealInParent() {
		RevealRootContentEvent.fire(this, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		Window.addCloseHandler(new CloseHandler<Window>() {

			@Override
			public void onClose(CloseEvent<Window> event) {
				System.out.println("le Browser s'est fermé");
			}
		});
	}

	@Override
	protected void onReset() {
		super.onReset();
		getView().setPageWeb(pageWeb);
		getView().setTicket();
		if (getView().getTicket() != null) {
			System.out.println("on va valider ce ticket " + getView().getTicket());
			dispatcher.execute(new ValideCasTicket(getView().getCasUrl(), getView().getCasService(), getView().getTicket()),
					new AsyncCallback<ValideCasTicketResult>() {
				@Override
				public void onFailure(Throwable caught) {
					//getView().setErrorLabel(result.values().iterator().next())
				}

				@Override
				public void onSuccess(ValideCasTicketResult result) {
					Usager usager = result.getUsager();					
					System.out.println("le ticket a été validé ");
					eventBus.fireEvent(new CasEvent(usager));
				}
			});
		}
	}
}
