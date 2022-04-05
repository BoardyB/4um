import { Component, Input, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Post } from "../post";

@Component({
  selector: 'forum-post-editor-modal',
  templateUrl: './post-editor-modal.component.html',
  styleUrls: ['./post-editor-modal.component.scss']
})
export class PostEditorModalComponent {
  @Input() post: Post;
  @Input() discussionId: string;
  @ViewChild('postEditorModal') editorModal: TemplateRef<any>;
  modalRef: BsModalRef;
  private modalService: BsModalService;

  constructor(modalService: BsModalService) {
    this.modalService = modalService;
  }

  openModal(post: Post, discussionId: string) {
    this.post = post;
    this.discussionId = discussionId;
    this.modalRef = this.modalService.show(this.editorModal, {class: 'modal-lg'});
  }

  closeModal() {
    this.modalRef.hide();
    this.post = Post.deserialize({});
    this.discussionId = '';
  }
}
