package ca.uSherbrooke.gegi.ui.cas.client.core;

import ca.uSherbrooke.gegi.ui.cas.client.place.NameTokens;

import com.gwtplatform.mvp.client.ViewImpl;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.google.inject.Inject;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;


public class LoginView extends ViewImpl implements LoginPresenter.MyView {


	private final String CAS_URL     = "https://cas.usherbrooke.ca/";
	private       String SERVICE_URL = GWT.getHostPageBaseURL();
	private       String server      = null;
	private       String pageWeb     = null;
	private       String ticket      = null;

	private final PlaceManager placeManager;


	@Inject
	public LoginView(PlaceManager placeManager) {

		this.placeManager = placeManager;
		if (!GWT.isScript()) {
			server = "?gwt.codesvr=127.0.0.1:9997";			
		}
		else {
			server = "";
		}
	}

	@Override
	public Widget asWidget() {
		return null;
	}

	@Override
	public String getCasUrl() {
		return CAS_URL ;		
	}


	@Override
	public String getCasService() {
		return SERVICE_URL + pageWeb + server;		
	}


	@Override
	public String getTicket() {
		return ticket;		
	}

	@Override
	public void setTicket() {
		//ticket ="debug";
		ticket = Window.Location.getParameter("ticket");
		if (ticket == null) {
			Window.Location.replace(CAS_URL +"login?service=" + getCasService());	
		}
	}

	@Override
	public void setPageWeb(String pageWeb) {
		this.pageWeb = pageWeb;

	}
}
