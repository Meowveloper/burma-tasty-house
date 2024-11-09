// custom.d.ts
import IUser from './src/types/IUser';
declare global {
  namespace Express {
    interface Request {
      user?: any;  // Add optional user property to the Request interface
    }
  }
}