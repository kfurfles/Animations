import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';

interface Signature{
  authorTwitter?: string;
  siteName: string;
  siteUrl: string;
}

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnChanges {

  @Input() signature: Signature;
  @Input() color: Signature;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
