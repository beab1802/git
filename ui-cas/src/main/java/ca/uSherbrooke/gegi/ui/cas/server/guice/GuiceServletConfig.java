package ca.uSherbrooke.gegi.ui.cas.server.guice;

import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.Injector;
import com.google.inject.Guice;
import ca.uSherbrooke.gegi.ui.cas.server.guice.DispatchServletModule;

public class GuiceServletConfig extends GuiceServletContextListener {

	@Override
	protected Injector getInjector() {
		return Guice.createInjector(new CasServerModule(), new DispatchServletModule());	
	}
}
