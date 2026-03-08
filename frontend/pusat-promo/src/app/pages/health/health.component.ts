import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  result: string | null = null;
  error: string | null = null;
  loading = false;
  hasFetched = false;

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Do not fetch automatically on init. First fetch occurs when user clicks the button.
  }

  async check(): Promise<void> {
    this.loading = true;
    this.error = null;
    this.result = null;
    try {
      this.hasFetched = true;
      const res = await fetch('http://localhost:8080/ping', { method: 'GET' });
      const text = await res.text();
      this.result = `Status: ${res.status} ${res.statusText}\n\n${text}`;
    } catch (e: any) {
      this.error = e?.message ?? String(e);
    } finally {
      this.loading = false;
      this.cd.detectChanges();
    }
  }
}
