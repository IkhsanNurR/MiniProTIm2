<<<<<<< HEAD
<<<<<<< HEAD
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as Jwt from 'jsonwebtoken';
import { users } from 'models';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    try {
      if (!token) {
        throw new Error('Login dulu bang!');
      }
      const decoded = Jwt.verify(token, process.env.JWTSECRET);
      console.log(decoded);
      return true;
    } catch (err) {
      // return false;
      throw new ForbiddenException(err.message);
    }
  }
}

export class RolesGuards implements CanActivate {
  constructor(@Inject(Reflector) private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      // no @Roles() decorator found, allow access
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    try {
      if (!token) {
        throw new Error('Login dulu bang!');
      }
      const decoded = Jwt.verify(token, process.env.JWTSECRET);
      console.log(decoded);
      if (decoded.roles == null || typeof decoded.roles == undefined) {
        throw new Error('Invalid Token');
      }
      const result: any = await users.findOne({
        where: { uuid: decoded.userId },
      });
      const userRoles = result.roles;
      const hasRole = roles.some((role) => userRoles.includes(role));
      if (!hasRole) {
        throw new Error('Forbidden Resources!');
      }
      return true;
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }
}

// export class RolesGuards implements CanActivate {
//   canActivate(context: ExecutionContext) {
//     const request = context.switchToHttp().getRequest();
//     const token = request.headers.authorization;
//     try {
//       if (!token) {
//         throw new Error('Login dulu bang!');
//       }
//       const decoded = Jwt.verify(token, process.env.JWTSECRET);
//       console.log(decoded);
//       const result = users.findOne({
//         where: { id: decoded.user_id },
//       });

//       return true;
//     } catch (err) {
//       // return false;
//       throw new ForbiddenException(err.message);
//     }
//   }
// }
=======
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as Jwt from 'jsonwebtoken';
import { users } from 'models';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    try {
      if (!token) {
        throw new Error('Login dulu bang!');
      }
      const decoded = Jwt.verify(token, process.env.JWTSECRET);
      console.log(decoded);
      return true;
    } catch (err) {
      // return false;
      throw new ForbiddenException(err.message);
    }
  }
}

export class RolesGuards implements CanActivate {
  constructor(@Inject(Reflector) private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      // no @Roles() decorator found, allow access
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    try {
      if (!token) {
        throw new Error('Login dulu bang!');
      }
      const decoded = Jwt.verify(token, process.env.JWTSECRET);
      console.log(decoded);
      if (decoded.roles == null || typeof decoded.roles == undefined) {
        throw new Error('Invalid Token');
      }
      const result: any = await users.findOne({
        where: { uuid: decoded.userId },
      });
      const userRoles = result.roles;
      const hasRole = roles.some((role) => userRoles.includes(role));
      if (!hasRole) {
        throw new Error('Forbidden Resources!');
      }
      return true;
    } catch (err) {
      throw new ForbiddenException(err.message);
    }
  }
}

// export class RolesGuards implements CanActivate {
=======
// import {
//   CanActivate,
//   ExecutionContext,
//   ForbiddenException,
//   Inject,
//   Injectable,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import * as Jwt from 'jsonwebtoken';
// import { users } from 'models/usersSchema';

// @Injectable()
// export class JwtAuthGuard implements CanActivate {
>>>>>>> Nael-HR
//   canActivate(context: ExecutionContext) {
//     const request = context.switchToHttp().getRequest();
//     const token = request.headers.authorization;
//     try {
//       if (!token) {
//         throw new Error('Login dulu bang!');
//       }
//       const decoded = Jwt.verify(token, process.env.JWTSECRET);
//       console.log(decoded);
<<<<<<< HEAD
//       const result = users.findOne({
//         where: { id: decoded.user_id },
//       });

=======
>>>>>>> Nael-HR
//       return true;
//     } catch (err) {
//       // return false;
//       throw new ForbiddenException(err.message);
//     }
//   }
// }
<<<<<<< HEAD
>>>>>>> Ikhsan-Bootcamp
=======

// export class RolesGuards implements CanActivate {
//   constructor(@Inject(Reflector) private readonly reflector: Reflector) {}

//   async canActivate(context: ExecutionContext) {
//     const roles = this.reflector.get<string[]>('roles', context.getHandler());
//     if (!roles) {
//       // no @Roles() decorator found, allow access
//       return true;
//     }

//     const request = context.switchToHttp().getRequest();
//     const token = request.headers.authorization;
//     try {
//       if (!token) {
//         throw new Error('Login dulu bang!');
//       }
//       const decoded = Jwt.verify(token, process.env.JWTSECRET);
//       console.log(decoded);
//       if (decoded.roles == null || typeof decoded.roles == undefined) {
//         throw new Error('Invalid Token');
//       }
//       const result: any = await users.findOne({
//         where: { user_entity_id: decoded.user_entity_id },
//       });
//       const userRoles = result.roles;
//       const hasRole = roles.some((role) => userRoles.includes(role));
//       if (!hasRole) {
//         throw new Error('Forbidden Resources!');
//       }
//       return true;
//     } catch (err) {
//       throw new ForbiddenException(err.message);
//     }
//   }
// }

// // export class RolesGuards implements CanActivate {
// //   canActivate(context: ExecutionContext) {
// //     const request = context.switchToHttp().getRequest();
// //     const token = request.headers.authorization;
// //     try {
// //       if (!token) {
// //         throw new Error('Login dulu bang!');
// //       }
// //       const decoded = Jwt.verify(token, process.env.JWTSECRET);
// //       console.log(decoded);
// //       const result = users.findOne({
// //         where: { id: decoded.user_id },
// //       });

// //       return true;
// //     } catch (err) {
// //       // return false;
// //       throw new ForbiddenException(err.message);
// //     }
// //   }
// // }
>>>>>>> Nael-HR
