package ca.uSherbrooke.gegi.ui.etudiants.client.core;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.sencha.gxt.core.client.util.ToggleGroup;
import com.sencha.gxt.widget.core.client.button.ToggleButton;
import com.sencha.gxt.widget.core.client.container.CardLayoutContainer;
import com.sencha.gxt.widget.core.client.container.VBoxLayoutContainer;
import com.sencha.gxt.widget.core.client.event.SelectEvent;

public class TestView extends ViewImpl implements TestPresenter.MyView {

	interface MyUiBinder extends UiBinder<Widget, TestView> {
	  }
	 
	  private static MyUiBinder uiBinder = GWT.create(MyUiBinder.class);
	 
	  @UiField
	  VBoxLayoutContainer buttonBox;
	  @UiField
	  CardLayoutContainer layout;
	 
	  @UiField
	  ToggleButton spaced, multiSpaced, alignTop, alignMiddle, alignBottom, alignStretch, alignStretchMax, flexAllEven,
	      flexRatio, flexStretch, packStart, packCenter, packEnd;
	 
	  public Widget asWidget() {
	    Widget widget = uiBinder.createAndBindUi(this);
	 
	    ToggleGroup toggleGroup = new ToggleGroup();
	    toggleGroup.add(spaced);
	    toggleGroup.add(multiSpaced);
	    toggleGroup.add(alignTop);
	    toggleGroup.add(alignMiddle);
	    toggleGroup.add(alignBottom);
	    toggleGroup.add(alignStretch);
	    toggleGroup.add(alignStretchMax);
	    toggleGroup.add(flexAllEven);
	    toggleGroup.add(flexRatio);
	    toggleGroup.add(flexStretch);
	    toggleGroup.add(packStart);
	    toggleGroup.add(packCenter);
	    toggleGroup.add(packEnd);
	    return widget;
	  }
	 

	  @UiHandler({
	      "spaced", "multiSpaced", "alignTop", "alignMiddle", "alignBottom", "alignStretch", "alignStretchMax",
	      "flexAllEven", "flexRatio", "flexStretch", "packStart", "packCenter", "packEnd"})
	  public void buttonClicked(SelectEvent event) {
	    ToggleButton button = (ToggleButton) event.getSource();
	 
	    int index = buttonBox.getWidgetIndex(button);
	    layout.setActiveWidget(layout.getWidget(index + 1));
	  }
	}
