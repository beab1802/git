package ca.uSherbrooke.gegi.ui.etudiants.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import ca.uSherbrooke.gegi.ui.etudiants.client.place.ClientPlaceManager;
import ca.uSherbrooke.gegi.ui.etudiants.client.core.EtudiantsPresenter;
import ca.uSherbrooke.gegi.ui.etudiants.client.core.EtudiantsView;
import ca.uSherbrooke.gegi.ui.etudiants.client.place.DefaultPlace;
import ca.uSherbrooke.gegi.ui.etudiants.client.place.NameTokens;
import ca.uSherbrooke.gegi.ui.frame.client.core.FramePresenter;
import ca.uSherbrooke.gegi.ui.frame.client.core.FrameView;
import ca.uSherbrooke.gegi.ui.frame.client.core.HeaderPresenter;
import ca.uSherbrooke.gegi.ui.frame.client.core.HeaderView;
import ca.uSherbrooke.gegi.ui.etudiants.client.core.TestPresenter;
import ca.uSherbrooke.gegi.ui.etudiants.client.core.TestView;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		install(new DefaultModule(ClientPlaceManager.class));
		bindPresenter(FramePresenter.class, FramePresenter.MyView.class, FrameView.class, FramePresenter.MyProxy.class);
		bindPresenter(HeaderPresenter.class, HeaderPresenter.MyView.class, HeaderView.class, HeaderPresenter.MyProxy.class);

		bindPresenter(EtudiantsPresenter.class,EtudiantsPresenter.MyView.class, EtudiantsView.class, EtudiantsPresenter.MyProxy.class);		
		bindConstant().annotatedWith(DefaultPlace.class).to(NameTokens.etudiants);

		bindPresenter(TestPresenter.class, TestPresenter.MyView.class,
				TestView.class, TestPresenter.MyProxy.class);

	}
}
