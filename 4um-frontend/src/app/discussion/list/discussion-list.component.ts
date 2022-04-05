import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Discussion } from "../discussion";
import { DiscussionRepository } from "../discussion-repository";
import { Router } from "@angular/router";
import { User } from "../../core/user/user";
import { UserService } from "../../core/user/user-service";

@Component({
  selector: 'forum-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {

  @Input() discussions: Discussion[];
  @Output() deleted: EventEmitter<Discussion> = new EventEmitter<Discussion>();
  currentUser: User;
  dataLoaded: boolean = false;
  private discussionRepository: DiscussionRepository;
  private router: Router;
  private userService: UserService;

  constructor(discussionRepository: DiscussionRepository, router: Router, userService: UserService) {
    this.discussionRepository = discussionRepository;
    this.router = router;
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userService.getCurrentUserId()).subscribe((user: User) => {
      this.currentUser = user;
      this.dataLoaded = true;
    })
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

  currentUserIsDiscussionCreator(discussion: Discussion): boolean {
    return this.currentUser.getId() === discussion.creator;
  }

}
