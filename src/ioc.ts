import { Http } from './utils/Http';
import type { IHttp } from './utils/Http';
import { Container } from 'inversify';
import { UserService } from './services/UserService';
import type { IUserService } from './services/UserService';
import { UserStore } from './stores/UserStore';
import { MainUserStore } from './stores/MainUserStore';
import { GlobalUserStore } from './stores/GlobalUserStore';

export const container = new Container();
container.bind<IHttp>('http').to(Http).inSingletonScope();
container.bind<IUserService>('userService').to(UserService).inSingletonScope();
container.bind<UserStore>('userStore').to(UserStore).inTransientScope();
container.bind<MainUserStore>('mainUserStore').to(MainUserStore).inTransientScope();
container.bind<GlobalUserStore>('globalUserStore').to(GlobalUserStore).inSingletonScope();
