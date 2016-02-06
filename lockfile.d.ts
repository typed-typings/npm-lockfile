export interface Options {
  /**
   * A number of milliseconds to wait for locks to expire before giving up. Only used by `lockFile.lock`. Poll for `opts.wait` ms. If the lock is not cleared by the time the wait expires, then it returns with the original error.
   */
  wait?: number;
  /**
   * When using `opts.wait`, this is the period in ms in which it polls to check if the lock has expired. Defaults to `100`.
   */
  pollPeriod?: number;
  /**
   * A number of milliseconds before locks are considered to have expired.
   */
  stale?: number;
  /**
   * Used by lock and lockSync. Retry n number of times before giving up.
   */
  retries?: number;
  /**
   * Used by lock. Wait `n` milliseconds before retrying.
   */
  retryWait?: number;
}

/**
 * Acquire a file lock on the specified path.
 */
export function lock (path: string, options: Options, callback: (err: Error) => void): void;
export function lock (path: string, callback: (err: Error) => void): void;
export function lockSync (path: string, opts?: Options): void;

/**
 * Close and unlink the lockfile.
 */
export function unlock (path: string, callback: (err: Error) => void): void;
export function unlockSync (path: string): void;

/**
 * Check if the lockfile is locked and not stale.
 */
export function check (path: string, options: Options, callback: (err: Error, isLocked: boolean) => void): void;
export function check (path: string, callback: (err: Error, isLocked: boolean) => void): void;
export function checkSync (path: string, opts?: Options): boolean;
