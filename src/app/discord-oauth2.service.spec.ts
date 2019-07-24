import { TestBed } from '@angular/core/testing';

import { DiscordOAuth2Service } from './discord-oauth2.service';

describe('DiscordOAuth2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscordOAuth2Service = TestBed.get(DiscordOAuth2Service);
    expect(service).toBeTruthy();
  });
});
