package ca.uSherbrooke.gegi.ui.cas.server.guice;

import com.gwtplatform.dispatch.server.guice.HandlerModule;
import ca.uSherbrooke.gegi.ui.cas.shared.ValideCasTicket;
import ca.uSherbrooke.gegi.ui.cas.server.ValideCasTicketActionHandler;

public class CasServerModule extends HandlerModule {

	@Override
	protected void configureHandlers() {
		bindHandler(ValideCasTicket.class, ValideCasTicketActionHandler.class);
	}
}
