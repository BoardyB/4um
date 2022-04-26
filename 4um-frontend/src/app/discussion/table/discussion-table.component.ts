import { Component, OnInit } from "@angular/core";
import { DiscussionRepository } from "../discussion-repository";
import { Discussion } from "../discussion";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'forum-discussion-table',
  templateUrl: './discussion-table.component.html',
  styleUrls: ['./discussion-table.component.scss']
})
export class DiscussionTableComponent implements OnInit {

  discussions: Discussion[] = [];
  featuredDiscussions: Discussion[] = [];
  private router: Router;
  private route: ActivatedRoute;
  private discussionRepository: DiscussionRepository;

  constructor(discussionRepository: DiscussionRepository, router: Router, route: ActivatedRoute) {
    this.discussionRepository = discussionRepository;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    this.reset();
  }

  public reset() {
    this.loadDiscussions();
    this.loadFeaturedDiscussions();
  }

  private loadDiscussions(): void {
    this.discussionRepository.findAll({featured: false}).subscribe(result => {
      this.discussions = this.discussionRepository.deserializeFromList(result);
    });
  }

  private loadFeaturedDiscussions(): void {
    this.discussionRepository.findAll({featured: true}).subscribe(result => {
      this.featuredDiscussions = this.discussionRepository.deserializeFromList(result);
    });
  }

  redirectToNewDiscussion(): void {
    this.router.navigateByUrl('/discussion/new');
  }

  searchDiscussions(event: Event) {
    const value = (event.target as any).value;
    const requestBody: any = {featured: false};
    if (!!value) {
      requestBody.filter = value.trim();
    }
    this.discussionRepository.findAll(requestBody).subscribe(result => {
      this.discussions = this.discussionRepository.deserializeFromList(result);
    });
    requestBody.featured = true;
    this.discussionRepository.findAll(requestBody).subscribe(result => {
      this.featuredDiscussions = this.discussionRepository.deserializeFromList(result);
    });
  }
}
