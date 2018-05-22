import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Discussion} from "./discussion";
import {FormGroup, NgForm} from "@angular/forms";
import {DiscussionRepository} from "./discussion-repository";
import {UserService} from "../core/user/user-service";
import {Router} from "@angular/router";

@Component({
  selector: 'forum-discussion-editor',
  templateUrl: './discussion-editor.component.html',
  styleUrls: ['./discussion-editor.component.css']
})
export class DiscussionEditorComponent implements OnInit {
  @Input() discussionId: string;
  @ViewChild('discussionForm') discussionForm: NgForm;
  @Output() saved: EventEmitter<Discussion> = new EventEmitter<Discussion>();
  cardTitle: string;
  discussion: Discussion;
  toolbar = [['bold', 'italic', 'underline', { color: [] }, { header: [1, 2, 3, 4, false] }]];
  private discussionRepository: DiscussionRepository;
  private userService: UserService;
  private router: Router;

  constructor(discussionRepository: DiscussionRepository, userService: UserService, router: Router) {
    this.discussionRepository = discussionRepository;
    this.userService = userService;
    this.router = router;
  }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    if (this.discussionId) {
      this.discussionRepository.findOne(this.discussionId).subscribe(data => {
        this.discussion = data;
        this.cardTitle = 'discussion.editTitle';
      });
    } else {
      this.discussion = Discussion.createEmptyDiscussion();
      this.discussion.creator = this.userService.getCurrentUserId();
      this.discussion.creationDate = new Date();
      this.cardTitle = 'discussion.createTitle';
      this.discussionForm.resetForm(this.discussion);
    }
  }

  save(form: FormGroup): void {
    form.controls['discussionTitle'].updateValueAndValidity();
    form.controls['discussionDescription'].updateValueAndValidity();
    if (form.valid) {
      this.discussionRepository.save(this.discussion).subscribe(() => {
        this.saved.emit(this.discussion);
        this.router.navigateByUrl('/discussion');
      });
    }
  }
}
