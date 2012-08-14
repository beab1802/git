package ca.uSherbrooke.gegi.ui.etudiants.client.gin;

import com.google.gwt.inject.client.GinModules;
import com.gwtplatform.dispatch.client.gin.DispatchAsyncModule;
import ca.uSherbrooke.gegi.ui.etudiants.client.gin.ClientModule;
import com.google.gwt.inject.client.Ginjector;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.google.gwt.inject.client.AsyncProvider;
import ca.uSherbrooke.gegi.ui.etudiants.client.core.EtudiantsPresenter;
import ca.uSherbrooke.gegi.ui.frame.client.core.FramePresenter;
import ca.uSherbrooke.gegi.ui.frame.client.core.HeaderPresenter;
import ca.uSherbrooke.gegi.ui.etudiants.client.core.TestPresenter;

@GinModules({ DispatchAsyncModule.class, ClientModule.class })
public interface ClientGinjector extends Ginjector {

	EventBus getEventBus();

	PlaceManager getPlaceManager();
	
	AsyncProvider<FramePresenter> getFramePresenter();
	AsyncProvider<HeaderPresenter> getHeaderPresenter();

	AsyncProvider<EtudiantsPresenter> getEtudiantsPresenter();

	AsyncProvider<TestPresenter> getTestPresenter();
}
