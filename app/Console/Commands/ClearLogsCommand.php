<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ClearLogsCommand extends Command
{
    protected $signature = 'logs:clear';

    protected $description = 'Clear log files';

    public function handle()
    {
        exec('rm -f ' . storage_path('logs/*.log'));
        exec('rm -f ' . base_path('*.log'));
        $this->comment('Logs have been cleared!');
    }
}
