#!/usr/bin/env node
/**
 * Nitaq Academy — Daily Automated Release Publisher
 * 
 * Usage:
 *   node scripts/daily-publisher.mjs status       -> Show 14-day schedule and publication status
 *   node scripts/daily-publisher.mjs today        -> Automatically publish today's / next pending release
 *   node scripts/daily-publisher.mjs day <N>      -> Publish specific day N (1 to 14)
 *   node scripts/daily-publisher.mjs cron-info    -> Print crontab command to run automatically on Mac
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const schedulePath = resolve(root, 'scripts', 'release-schedule.json');

const loadSchedule = () => {
  const raw = readFileSync(schedulePath, 'utf8');
  return JSON.parse(raw);
};

const saveSchedule = (data) => {
  writeFileSync(schedulePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
};

const args = process.argv.slice(2);
const command = args[0] || 'today';

function printStatus() {
  const data = loadSchedule();
  console.log('\n================================================================');
  console.log('       NITAQ ACADEMY • 14-DAY SAT RELEASE SCHEDULE STATUS');
  console.log('================================================================\n');
  console.log('| Day | Date       | Status    | Title');
  console.log('|-----|------------|-----------|------------------------------------------------');
  data.releases.forEach(r => {
    const statusIcon = r.status === 'published' ? '✓ PUBLISHED' : '⏳ PENDING  ';
    console.log(`| ${String(r.day).padStart(3)} | ${r.date} | ${statusIcon} | ${r.title}`);
  });
  console.log('\n----------------------------------------------------------------');
  const next = data.releases.find(r => r.status === 'pending');
  if (next) {
    console.log(`Next Release Queued: Day ${next.day} (${next.date}) — "${next.title}"`);
    console.log(`Run 'npm run release:today' to execute this release.\n`);
  } else {
    console.log('All 14 releases have been published!\n');
  }
}

function printCronInfo() {
  console.log('\n================================================================');
  console.log('       NIGHTLY AUTOMATIC MAC RUNNER SETUP (11:00 PM IST / 9:30 PM GST)');
  console.log('================================================================\n');
  console.log('To have your Mac run the release automatically every night at 9:30 PM GST:');
  console.log('1. Open terminal and run: crontab -e');
  console.log('2. Paste the following line at the end of your crontab:\n');
  console.log(`   0 23 * * * cd ${root} && node scripts/daily-publisher.mjs today >> /tmp/nitaq-release.log 2>&1\n`);
  console.log('3. Save and exit (in vim, press ESC then :wq and Enter).');
  console.log('4. The script will execute every night, commit, and push to origin main!\n');
}

function publishRelease(dayNumber = null) {
  const data = loadSchedule();
  let target = null;

  if (dayNumber !== null) {
    target = data.releases.find(r => r.day === Number(dayNumber));
    if (!target) {
      console.error(`Error: Day ${dayNumber} not found in release-schedule.json`);
      process.exit(1);
    }
  } else {
    // Find next pending
    target = data.releases.find(r => r.status === 'pending');
    if (!target) {
      console.log('All 14 releases are already marked as published! Run status to inspect.');
      return;
    }
  }

  console.log(`\nPublishing Day ${target.day}: "${target.title}"`);
  console.log(`Target Routes: ${target.routes.join(', ')}`);
  console.log(`Commit Message: ${target.commitMessage}\n`);

  try {
    // 1. Stage changes
    console.log('Staging files with git add...');
    execSync('git add .', { cwd: root, stdio: 'inherit' });

    // Check if there are changes to commit
    const statusOutput = execSync('git status --porcelain', { cwd: root, encoding: 'utf8' }).trim();
    if (!statusOutput && target.status === 'published') {
      console.log('No new code changes to commit for this release.');
    } else {
      // 2. Mark published in schedule before commit so the json update is included
      target.status = 'published';
      target.publishedAt = new Date().toISOString();
      saveSchedule(data);

      execSync('git add scripts/release-schedule.json', { cwd: root, stdio: 'inherit' });

      // 3. Commit
      console.log(`Committing: ${target.commitMessage}`);
      execSync(`git commit -m "${target.commitMessage.replace(/"/g, '\\"')}"`, { cwd: root, stdio: 'inherit' });

      // 4. Push to remote
      console.log('Pushing to origin main...');
      try {
        execSync('git push origin main', { cwd: root, stdio: 'inherit' });
        console.log(`\n✓ Day ${target.day} successfully published and pushed to GitHub!`);
        console.log('Vercel will automatically build and deploy the update live to production in ~90 seconds.');
      } catch (pushErr) {
        console.warn(`\n⚠️ Commit created successfully, but git push to remote requires network access or credentials.`);
        console.log(`To push to GitHub, run: git push origin main`);
      }
    }
  } catch (err) {
    console.error('Error during git publish execution:', err.message);
    process.exit(1);
  }
}

// Command router
if (command === 'status') {
  printStatus();
} else if (command === 'cron-info') {
  printCronInfo();
} else if (command === 'day') {
  const dayNum = args[1];
  if (!dayNum) {
    console.error('Please specify a day number: node scripts/daily-publisher.mjs day <N>');
    process.exit(1);
  }
  publishRelease(dayNum);
} else {
  publishRelease();
}
