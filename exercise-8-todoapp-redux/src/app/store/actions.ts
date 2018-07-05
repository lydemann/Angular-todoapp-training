import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = any;
class MetaData {

}

export type AnimalAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class AnimalAPIActions {

    // Action names goes here

    // actions goes here
    // use @dispatch() for invoking the action på calling the action like a normal method

}
