import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Discussion } from "./discussion";
import { Repository } from "../core/repository/repository";

@Injectable()
export class DiscussionRepository extends Repository<Discussion, string> {

  constructor(httpClient: HttpClient) {
    super('forum/discussion', httpClient, Discussion);
  }

}
