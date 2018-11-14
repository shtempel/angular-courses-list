import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';

interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

interface State {
    router: RouterReducerState<RouterStateUrl>;
}

class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {url, root: {queryParams}} = routerState;
        const {params} = route;
        return {url, params, queryParams};
    }
}

export { CustomSerializer, State, RouterStateUrl };
