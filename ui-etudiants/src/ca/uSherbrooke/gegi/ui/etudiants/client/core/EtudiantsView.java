package ca.uSherbrooke.gegi.ui.etudiants.client.core;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.sencha.gxt.core.client.resources.ThemeStyles;
import com.sencha.gxt.core.client.util.Margins;
import com.sencha.gxt.widget.core.client.ContentPanel;
import com.sencha.gxt.widget.core.client.ContentPanel.ContentPanelAppearance;
import com.sencha.gxt.widget.core.client.FramedPanel.FramedPanelAppearance;
import com.sencha.gxt.widget.core.client.container.HorizontalLayoutContainer;
import com.sencha.gxt.widget.core.client.container.HorizontalLayoutContainer.HorizontalLayoutData;

public class EtudiantsView extends ViewImpl implements EtudiantsPresenter.MyView {

		private final Widget widget;

	public interface Binder extends UiBinder<Widget, EtudiantsView> {
	}

	@Inject
	public EtudiantsView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
/*	@Override
	  public Widget asWidget() {
	    VerticalPanel vp = new VerticalPanel();
	    vp.setSpacing(10);
	 
	    ContentPanel panel = new ContentPanel(GWT.<ContentPanelAppearance> create(FramedPanelAppearance.class));
	    panel.setHeadingText("HorizontalLayout Example");
	    panel.setPixelSize(400, 300);
	    panel.setCollapsible(true);
	 
	    HorizontalLayoutContainer c = new HorizontalLayoutContainer();
	    panel.setWidget(c);
	 
	    c.add(createLabel("Test Label 1"), new HorizontalLayoutData(-1, 1, new Margins(4)));
	    c.add(createLabel("Test Label 2"), new HorizontalLayoutData(1, 1, new Margins(4, 0, 4, 0)));
	    c.add(createLabel("Test Label 3"), new HorizontalLayoutData(-1, 1, new Margins(4)));
	 
	    vp.add(panel);
	 
	    return vp;
	  }
	 
	  private Label createLabel(String text) {
	    Label label = new Label(text);
	    label.getElement().getStyle().setProperty("whiteSpace", "nowrap");
	    label.addStyleName(ThemeStyles.getStyle().border());
	    label.addStyleName("pad-text white-bg");
	 
	    return label;
	  } 
	 */
}
