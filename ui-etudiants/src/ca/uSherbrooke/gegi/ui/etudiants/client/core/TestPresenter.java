package ca.uSherbrooke.gegi.ui.etudiants.client.core;

import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import ca.uSherbrooke.gegi.ui.etudiants.client.place.NameTokens;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import ca.uSherbrooke.gegi.ui.frame.client.core.FramePresenter;

public class TestPresenter extends
		Presenter<TestPresenter.MyView, TestPresenter.MyProxy> {

	public interface MyView extends View {
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.test)
	public interface MyProxy extends ProxyPlace<TestPresenter> {
	}

	@Inject
	public TestPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, FramePresenter.TYPE_SetTopContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
	}
}
