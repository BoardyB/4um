import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Discussion} from "./discussion";
import {DiscussionRepository} from "./discussion-repository";
import {Router} from "@angular/router";

@Component({
  selector: 'forum-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent {

  @Input() discussions: Discussion[];
  @Output() deleted: EventEmitter<Discussion> = new EventEmitter<Discussion>();
  private discussionRepository: DiscussionRepository;
  private router: Router;

  constructor(discussionRepository: DiscussionRepository, router: Router) {
    this.discussionRepository = discussionRepository;
    this.router = router;
  }

  delete(discussion: Discussion): void {
    this.discussionRepository.delete(discussion).subscribe(result => {
      if (result.statusCode === 200) {
        this.deleted.emit(discussion);
      }
    });
  }

  showDiscussion(discussionId: string): void {
    this.router.navigateByUrl('/discussion/' + discussionId);
  }

  edit(discussionId: string): void {
    this.router.navigateByUrl('/discussion/edit/' + discussionId)
  }

}
