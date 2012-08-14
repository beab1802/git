package ca.uSherbrooke.gegi.ui.cas.server;



import com.gwtplatform.dispatch.server.actionhandler.ActionHandler;

import ca.uSherbrooke.gegi.ui.cas.shared.ValideCasTicket;
import ca.uSherbrooke.gegi.ui.cas.shared.ValideCasTicketResult;
import ca.uSherbrooke.gegi.persist.cas.server.Cas;
import ca.uSherbrooke.gegi.persist.cas.share.Usager;


import com.google.inject.Inject;
import com.gwtplatform.dispatch.server.ExecutionContext;
import com.gwtplatform.dispatch.shared.ActionException;

public class ValideCasTicketActionHandler implements ActionHandler<ValideCasTicket, ValideCasTicketResult> {

	@Inject
	public ValideCasTicketActionHandler() {
	}

	@Override
	public ValideCasTicketResult execute(ValideCasTicket action, ExecutionContext context) throws ActionException {
		System.out.println(action.getCasUrl());
		System.out.println(action.getCasService());
		System.out.println(action.getTicket());
		Usager usager;
		usager = Cas.valide(action.getCasUrl(), action.getCasService(), action.getTicket());		
		return new ValideCasTicketResult(usager);
	}

	@Override
	public void undo(ValideCasTicket action, ValideCasTicketResult result, ExecutionContext context) throws ActionException {
	}

	@Override
	public Class<ValideCasTicket> getActionType() {
		return ValideCasTicket.class;
	}
}
