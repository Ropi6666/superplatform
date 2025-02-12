/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { FirehoseService } from './firehose.service';
import { ReplaySubject, first } from 'rxjs';
import { UserService } from './user.service';
import {
	DownloadSvcApi,
	Configuration,
	DownloadSvcDownloadDetails as DownloadDetails,
	DownloadSvcDownloadsResponse,
} from '@openorch/client';

export interface DownloadSvcConfig {
	downloadFolder: string;
}


export interface DownloadStatusChangeEvent {
	allDownloads: DownloadDetails[];
}

@Injectable({
	providedIn: 'root',
})
export class DownloadService {
	downloadService!: DownloadSvcApi;

	onFileDownloadStatusSubject = new ReplaySubject<DownloadStatusChangeEvent>(1);
	onFileDownloadStatus$ = this.onFileDownloadStatusSubject.asObservable();

	constructor(
		private server: ServerService,
		private firehoseService: FirehoseService,
		private userService: UserService
	) {
		this.init();
		this.userService.user$.pipe(first()).subscribe(() => {
			this.downloadService = new DownloadSvcApi(
				new Configuration({
					basePath: this.server.addr(),
					apiKey: this.server.token(),
				})
			);
			this.loggedInInit();
		});
	}

	async init() {
		this.firehoseService.firehoseEvent$.subscribe(async (event) => {
			switch (event.name) {
				case 'downloadStatusChange': {
					const rsp = await this.downloadList();
					this.onFileDownloadStatusSubject.next({
						allDownloads: rsp?.downloads || [],
					});
					break;
				}
			}
		});
	}

	async loggedInInit() {
		try {
			const rsp = await this.downloadList();
			this.onFileDownloadStatusSubject.next({
				allDownloads: rsp?.downloads as DownloadDetails[],
			});
		} catch (error) {
			console.error('Error in pollFileDownloadStatus', {
				error: JSON.stringify(error),
			});
		}
	}

	async downloadDo(url: string) {
		this.downloadService.download({
			body: {
				url: url,
			},
		});
	}

	async downloadPause(url: string) {
		this.downloadService.pause({
			downloadId: url,
		});
	}

	async downloadList(): Promise<DownloadSvcDownloadsResponse> {
		return this.downloadService.listDownloads();
	}
}
