import {Component, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import {Discussion} from "./discussion";
import {FormGroup, NgForm} from "@angular/forms";
import {DiscussionRepository} from "./discussion-repository";
import {UserService} from "../core/user/user-service";
import {ActivatedRoute, Router} from "@angular/router";
import {isPresent} from "../core/util/util";
import {User} from "../core/user/user";

@Component({
  selector: 'forum-discussion-editor',
  templateUrl: './discussion-editor.component.html',
  styleUrls: ['./discussion-editor.component.scss']
})
export class DiscussionEditorComponent implements OnInit {
  @ViewChild('discussionForm') discussionForm: NgForm;
  @Output() saved: EventEmitter<Discussion> = new EventEmitter<Discussion>();
  cardTitle: string;
  discussion: Discussion;
  currentUserId: string;
  currentUser: User;
  toolbar = [['bold', 'italic', 'underline', {color: []}, {header: [1, 2, 3, 4, false]}]];
  dataLoaded: boolean = false;
  private discussionRepository: DiscussionRepository;
  private userService: UserService;
  private router: Router;
  private route: ActivatedRoute;

  constructor(discussionRepository: DiscussionRepository, userService: UserService, router: Router, route: ActivatedRoute) {
    this.discussionRepository = discussionRepository;
    this.userService = userService;
    this.router = router;
    this.route = route;
  }

  ngOnInit(): void {
    this.reset();
    this.currentUserId = this.userService.getCurrentUserId();
    this.userService.getUserById(this.currentUserId).subscribe((user: User) => {
      this.currentUser = user;
      this.dataLoaded = true;
    });
  }

  reset(): void {
    const loadedDiscussion = this.route.snapshot.data.discussion;
    if (isPresent(loadedDiscussion)) {
      this.discussion = Discussion.deserialize(loadedDiscussion);
      this.cardTitle = 'discussion.editor.editTitle';
    } else {
      this.discussion = Discussion.createEmptyDiscussion();
      this.discussion.creator = this.userService.getCurrentUserId();
      this.discussion.creationDate = new Date();
      this.cardTitle = 'discussion.editor.createTitle';
      this.discussionForm.resetForm(this.discussion);
    }
  }

  save(form: FormGroup): void {
    form.controls['discussionTitle'].updateValueAndValidity();
    form.controls['discussionDescription'].updateValueAndValidity();
    if (form.valid) {
      this.discussionRepository.save(this.discussion).subscribe(() => {
        this.saved.emit(this.discussion);
        this.router.navigateByUrl('/discussion/all');
      });
    }
  }

  cancel(): void {
    this.router.navigateByUrl('/discussion/all');
  }
}
