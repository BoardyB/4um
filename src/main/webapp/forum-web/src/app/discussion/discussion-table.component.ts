import {Component, OnInit} from "@angular/core";
import {DiscussionRepository} from "./discussion-repository";
import {Discussion} from "./discussion";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'forum-discussion-table',
  templateUrl: './discussion-table.component.html',
  styleUrls: ['./discussion-table.component.scss']
})
export class DiscussionTableComponent implements OnInit {

  discussions: Discussion[] = [];
  featuredDiscussions: Discussion[] = [];
  private discussionRepository: DiscussionRepository;
  private router: Router;
  private route: ActivatedRoute;

  constructor(discussionRepository: DiscussionRepository, router: Router, route: ActivatedRoute) {
    this.discussionRepository = discussionRepository;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    this.reset();
  }

  private reset() {
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

  showDiscussion(discussionId: string): void {
    this.router.navigateByUrl('/discussion/' + discussionId);
  }

  delete(discussion: Discussion): void {
    this.discussionRepository.delete(discussion).subscribe(result => {
      if (result.statusCode === 200) {
        this.reset();
      }
    });
  }
}
