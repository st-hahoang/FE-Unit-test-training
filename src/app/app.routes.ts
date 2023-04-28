import authRoutes from './core/auth/auth.routes';
import { PageRoute } from './core/modules/custom-router-dom/router.interface';
import pageRoutes from './pages/page.routes';
import userRoutes from './pages/user/user.router';

const appRoutes: PageRoute[] = [
  ...authRoutes,
  ...pageRoutes,
  ...userRoutes
];

export default appRoutes;
