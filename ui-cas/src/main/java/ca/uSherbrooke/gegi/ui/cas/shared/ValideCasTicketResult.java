package ca.uSherbrooke.gegi.ui.cas.shared;

import ca.uSherbrooke.gegi.persist.cas.share.Usager;

import com.gwtplatform.dispatch.shared.Result;

public class ValideCasTicketResult implements Result {

	 private static final long serialVersionUID = 4621412923270714515L;
	
	private Usager usager;

	@SuppressWarnings("unused")
	private ValideCasTicketResult() {
		// For serialization only
	}

	public ValideCasTicketResult(Usager usager) {
		this.usager = usager;
	}

	public Usager getUsager() {
		return usager;
	}

}
