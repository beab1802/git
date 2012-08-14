package ca.uSherbrooke.gegi.ui.cas.shared;

import com.gwtplatform.dispatch.shared.ActionImpl;

import java.lang.String;

public class ValideCasTicket extends ActionImpl<ValideCasTicketResult> {

	private static final long serialVersionUID = 4621412923270714515L;

	private String casUrl;
	private String casService;
	private String ticket;

	@SuppressWarnings("unused")
	private ValideCasTicket() {
		// For serialization only
	}

	public ValideCasTicket(String casUrl, String casService, String ticket) {
		this.casUrl     = casUrl;
		this.casService = casService;
		this.ticket     = ticket;
	}

	public String getCasUrl() {
		return casUrl;
	}

	public String getCasService() {
		return casService;
	}

	public String getTicket() {
		return ticket;
	}

	@Override
	public boolean isSecured() {
		return false;
	}

}
