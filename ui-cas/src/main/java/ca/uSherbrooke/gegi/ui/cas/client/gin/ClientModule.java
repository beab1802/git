package ca.uSherbrooke.gegi.ui.cas.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import ca.uSherbrooke.gegi.ui.cas.client.place.ClientPlaceManager;
import ca.uSherbrooke.gegi.ui.cas.client.place.DefaultPlace;
import ca.uSherbrooke.gegi.ui.cas.client.place.NameTokens;
import ca.uSherbrooke.gegi.ui.cas.client.core.ErrorPresenter;
import ca.uSherbrooke.gegi.ui.cas.client.core.ErrorView;
import ca.uSherbrooke.gegi.ui.cas.client.place.ErrorPlace;
import ca.uSherbrooke.gegi.ui.cas.client.core.LoginPresenter;
import ca.uSherbrooke.gegi.ui.cas.client.core.LoginView;



public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		install(new DefaultModule(ClientPlaceManager.class));

		bindPresenter(ErrorPresenter.class, ErrorPresenter.MyView.class, ErrorView.class, ErrorPresenter.MyProxy.class);
		bindConstant().annotatedWith(ErrorPlace.class).to(NameTokens.error);
		bindPresenter(LoginPresenter.class, LoginPresenter.MyView.class,LoginView.class, LoginPresenter.MyProxy.class);
		bindConstant().annotatedWith(DefaultPlace.class).to(NameTokens.login);
	}
}
