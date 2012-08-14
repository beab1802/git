package ca.uSherbrooke.gegi.ui.cas.client.event;

import ca.uSherbrooke.gegi.persist.cas.share.Usager;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;

public class CasEvent  extends  GwtEvent<CasEvent.CasHandler> {
	  public interface CasHandler extends EventHandler {
		    void onCasEvent(CasEvent event);
		  }

		  public static Type<CasHandler> TYPE = new Type<CasHandler>();
		  
		  private Usager usager;
		  
		  public CasEvent(Usager usager){
		    this.usager = usager;

		  }
		  
		  @Override
		  public Type<CasHandler> getAssociatedType() {
		    return TYPE;
		  }

		  @Override
		  protected void dispatch(CasHandler handler) {
		    handler.onCasEvent(this);
		  }   
		  
		  public Usager getUsager() {
			  return usager;
		  }
		  
		} 
