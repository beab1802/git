package ca.uSherbrooke.gegi.ui.cas.client.gin;

import com.google.gwt.inject.client.GinModules;
import com.gwtplatform.dispatch.client.gin.DispatchAsyncModule;
import com.google.gwt.inject.client.Ginjector;

import com.google.gwt.event.shared.EventBus;

import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.google.inject.Provider;

import ca.uSherbrooke.gegi.ui.cas.client.gin.ClientModule;
import ca.uSherbrooke.gegi.ui.cas.client.core.ErrorPresenter;
import ca.uSherbrooke.gegi.ui.cas.client.core.LoginPresenter;

@GinModules({ DispatchAsyncModule.class, ClientModule.class })
public interface ClientGinjector extends Ginjector {

	EventBus getEventBus();
	PlaceManager getPlaceManager();
	Provider<ErrorPresenter> getErrorPresenter();
	Provider<LoginPresenter> getLoginPresenter();
}
