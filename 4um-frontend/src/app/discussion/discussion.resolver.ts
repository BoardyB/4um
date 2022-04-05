import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { isPresent } from '../core/util/util';
import { Discussion } from "./discussion";
import { DiscussionRepository } from "./discussion-repository";

@Injectable()
export class DiscussionResolver implements Resolve<Discussion> {
  constructor(private repository: DiscussionRepository) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (isPresent(route.params['id'])) {
      return this.repository.findOne(route.params['id']);
    } else {
      return Discussion.createEmptyDiscussion();
    }
  }
}
