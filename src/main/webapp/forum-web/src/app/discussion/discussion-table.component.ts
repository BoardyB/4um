import {Component, OnInit} from "@angular/core";
import {DiscussionRepository} from "./discussion-repository";
import {Discussion} from "./discussion";

@Component({
  selector: 'forum-discussion-table',
  templateUrl: './discussion-table.component.html',
  styleUrls: ['./discussion-table.component.css']
})
export class DiscussionTableComponent implements OnInit {

  discussions: Discussion[] = [];
  private discussionRepository: DiscussionRepository;

  constructor(discussionRepository: DiscussionRepository) {
    this.discussionRepository = discussionRepository;
  }

  ngOnInit(): void {
    this.loadDiscussions();
  }

  private loadDiscussions() {
    this.discussionRepository.findAll().subscribe(result => {
      const resultString = JSON.stringify(result);
      let parsedContent = JSON.parse(resultString);
      this.discussions = this.discussionRepository.deserializeFromList(parsedContent);
    });
  }
}
