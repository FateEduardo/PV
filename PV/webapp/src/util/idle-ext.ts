import {Injectable} from "@angular/core";
import {Idle, SimpleExpiry} from "ng2-idle/core";

/**
 * 
 * Dependency for using idle (1.0.0-alpha.16) due existing issue with latest angular version (~2.0.1)
 * revisit once a non alpha version is released: https://github.com/HackedByChinese/ng2-idle/issues/17
 *
 */
@Injectable()
export class IdleExt extends Idle {
    constructor(expiry: SimpleExpiry) {
        super(expiry);
    }
}
