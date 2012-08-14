package ca.uSherbrooke.gegi.ui.etudiants.client.core;

import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import ca.uSherbrooke.gegi.ui.etudiants.client.place.NameTokens;

import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import ca.uSherbrooke.gegi.ui.frame.client.core.FramePresenter;

public class EtudiantsPresenter extends
		Presenter<EtudiantsPresenter.MyView, EtudiantsPresenter.MyProxy> {

	public interface MyView extends View {
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.etudiants)
	public interface MyProxy extends ProxyPlace<EtudiantsPresenter> {
	}
	
	@Inject PlaceManager placeManager;

	@Inject
	public EtudiantsPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, FramePresenter.TYPE_SetMainContent, this);
	}
	
	@Override
	protected void onReveal() {
		super.onReveal();
		PlaceRequest request = new PlaceRequest(NameTokens.getHeader());
		placeManager.revealPlace(request);
	}

	@Override
	protected void onBind() {
		super.onBind();
	}
}
