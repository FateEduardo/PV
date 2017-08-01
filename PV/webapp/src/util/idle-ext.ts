import {Injectable} from "@angular/core";
import {Idle, SimpleExpiry} from "@ng-idle/core";

/**
 * Created by Fernando Martinez on 26/1/16.
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