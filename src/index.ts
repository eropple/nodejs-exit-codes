/**
 * All codes taken from the freedesktop.org systemd spec:
 *
 * https://freedesktop.org/software/systemd/man/systemd.exec.html#id-1.20.8
 */

export type ExitCode = 0 |
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
  21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
  41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 |
  61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 |
  81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 |
  101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 |
  121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 |
  141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 |
  161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 |
  181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 |
  201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 |
  221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 |
  241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255;

/**
 * Generic success code.
 */
export const EXIT_SUCCESS: ExitCode = 0;

/**
 * Generic failure or unspecified error.
 */
export const EXIT_FAILURE: ExitCode = 1;

/**
 * Invalid or excess arguments. (LSB)
 */
export const EXIT_INVALIDARGUMENT: ExitCode = 2;

/**
 * Unimplemented feature. (LSB)
 */
export const EXIT_NOTIMPLEMENTED: ExitCode = 3;

/**
 * The user has insufficient privileges. (LSB)
 */
export const EXIT_NOPERMISSION: ExitCode = 4;

/**
 * The program is not installed. (LSB)
 */
export const EXIT_NOTINSTALLED: ExitCode = 5;

/**
 * The program is not configured. (LSB)
 */
export const EXIT_NOTCONFIGURED: ExitCode = 6;

/**
 * The program is not running. (LSB)
 */
export const EXIT_NOTRUNNING: ExitCode = 7;

/**
 * Command line usage error (BSD)
 **/
export const EX_USAGE: ExitCode = 64;
export const EXIT_USAGE: ExitCode = EX_USAGE;

/**
 * Data format error (BSD)
 **/
export const EX_DATAERR: ExitCode = 65;
export const EXIT_DATAERR: ExitCode = EX_DATAERR;

/**
 * Cannot open input (BSD)
 **/
export const EX_NOINPUT: ExitCode = 66;
export const EXIT_NOINPUT: ExitCode = EX_NOINPUT;

/**
 * Addressee unknown (BSD)
 **/
export const EX_NOUSER: ExitCode = 67;
export const EXIT_NOUSER: ExitCode = EX_NOUSER;

/**
 * Host name unknown (BSD)
 **/
export const EX_NOHOST: ExitCode = 68;
export const EXIT_NOHOST: ExitCode = EX_NOHOST;

/**
 * Service unavailable (BSD)
 **/
export const EX_UNAVAILABLE: ExitCode = 69;
export const EXIT_UNAVAILABLE: ExitCode = EX_UNAVAILABLE;

/**
 * internal software error (BSD)
 **/
export const EX_SOFTWARE: ExitCode = 70;
export const EXIT_SOFTWARE: ExitCode = EX_SOFTWARE;

/**
 * System error (e.g., can't fork) (BSD)
 **/
export const EX_OSERR: ExitCode = 71;
export const EXIT_OSERR: ExitCode = EX_OSERR;

/**
 * Critical OS file missing (BSD)
 **/
export const EX_OSFILE: ExitCode = 72;
export const EXIT_OSFILE: ExitCode = EX_OSFILE;

/**
 * Can't create (user) output file (BSD)
 **/
export const EX_CANTCREAT: ExitCode = 73;
export const EXIT_CANTCREAT: ExitCode = EX_CANTCREAT;

/**
 * Input/output error (BSD)
 **/
export const EX_IOERR: ExitCode = 74;
export const EXIT_IOERR: ExitCode = EX_IOERR;

/**
 * Temporary failure; user is invited to retry (BSD)
 **/
export const EX_TEMPFAIL: ExitCode = 75;
export const EXIT_TEMPFAIL: ExitCode = EX_TEMPFAIL;

/**
 * Remote error in protocol (BSD)
 **/
export const EX_PROTOCOL: ExitCode = 76;
export const EXIT_PROTOCOL: ExitCode = EX_PROTOCOL;

/**
 * Permission denied (BSD)
 **/
export const EX_NOPERM: ExitCode = 77;
export const EXIT_NOPERM: ExitCode = EX_NOPERM;

/**
 * Configuration error (BSD)
 **/
export const EX_CONFIG: ExitCode = 78;
export const EXIT_CONFIG: ExitCode = EX_CONFIG;

/**
 * Changing to the requested working directory failed. See WorkingDirectory= above. (systemd)
 **/
export const EXIT_CHDIR: ExitCode = 200;

/**
 * Failed to set up process scheduling priority (nice level). See Nice= above. (systemd)
 **/
export const EXIT_NICE: ExitCode = 201;

/**
 * Failed to close unwanted file descriptors, or to adjust passed file descriptors. (systemd)
 **/
export const EXIT_FDS: ExitCode = 202;

/**
 * The actual process execution failed (specifically, the execve(2) system call). Most likely this is caused by a missing or non-accessible executable file. (systemd)
 **/
export const EXIT_EXEC: ExitCode = 203;

/**
 * Failed to perform an action due to memory shortage. (systemd)
 **/
export const EXIT_MEMORY: ExitCode = 204;

/**
 * Failed to adjust resource limits. See LimitCPU= and related settings above. (systemd)
 **/
export const EXIT_LIMITS: ExitCode = 205;

/**
 * Failed to adjust the OOM setting. See OOMScoreAdjust= above. (systemd)
 **/
export const EXIT_OOM_ADJUST: ExitCode = 206;

/**
 * Failed to set process signal mask. (systemd)
 **/
export const EXIT_SIGNAL_MASK: ExitCode = 207;

/**
 * Failed to set up standard input. See StandardInput= above. (systemd)
 **/
export const EXIT_STDIN: ExitCode = 208;

/**
 * Failed to set up standard output. See StandardOutput= above. (systemd)
 **/
export const EXIT_STDOUT: ExitCode = 209;

/**
 * Failed to change root directory (chroot(2)). See RootDirectory=/RootImage= above. (systemd)
 **/
export const EXIT_CHROOT: ExitCode = 210;

/**
 * Failed to set up IO scheduling priority. See IOSchedulingClass=/IOSchedulingPriority= above. (systemd)
 **/
export const EXIT_IOPRIO: ExitCode = 211;

/**
 * Failed to set up timer slack. See TimerSlackNSec= above. (systemd)
 **/
export const EXIT_TIMERSLACK: ExitCode = 212;

/**
 * Failed to set process secure bits. See SecureBits= above. (systemd)
 **/
export const EXIT_SECUREBITS: ExitCode = 213;

/**
 * Failed to set up CPU scheduling. See CPUSchedulingPolicy=/CPUSchedulingPriority= above. (systemd)
 **/
export const EXIT_SETSCHEDULER: ExitCode = 214;

/**
 * Failed to set up CPU affinity. See CPUAffinity= above. (systemd)
 **/
export const EXIT_CPUAFFINITY: ExitCode = 215;

/**
 * Failed to determine or change group credentials. See Group=/SupplementaryGroups= above. (systemd)
 **/
export const EXIT_GROUP: ExitCode = 216;

/**
 * Failed to determine or change user credentials, or to set up user namespacing. See User=/PrivateUsers= above. (systemd)
 **/
export const EXIT_USER: ExitCode = 217;

/**
 * Failed to drop capabilities, or apply ambient capabilities. See CapabilityBoundingSet=/AmbientCapabilities= above. (systemd)
 **/
export const EXIT_CAPABILITIES: ExitCode = 218;

/**
 * Setting up the service control group failed. (systemd)
 **/
export const EXIT_CGROUP: ExitCode = 219;

/**
 * Failed to create new process session. (systemd)
 **/
export const EXIT_SETSID: ExitCode = 220;

/**
 * Execution has been cancelled by the user. See the systemd.confirm_spawn= kernel command line setting on kernel-command-line(7) for details. (systemd)
 **/
export const EXIT_CONFIRM: ExitCode = 221;

/**
 * Failed to set up standard error output. See StandardError= above. (systemd)
 **/
export const EXIT_STDERR: ExitCode = 222;

/**
 * Failed to set up PAM session. See PAMName= above. (systemd)
 **/
export const EXIT_PAM: ExitCode = 224;

/**
 * Failed to set up network namespacing. See PrivateNetwork= above. (systemd)
 **/
export const EXIT_NETWORK: ExitCode = 225;

/**
 * Failed to set up mount namespacing. See ReadOnlyPaths= and related settings above. (systemd)
 **/
export const EXIT_NAMESPACE: ExitCode = 226;

/**
 * Failed to disable new privileges. See NoNewPrivileges=yes above. (systemd)
 **/
export const EXIT_NO_NEW_PRIVILEGES: ExitCode = 227;

/**
 * Failed to apply system call filters. See SystemCallFilter= and related settings above. (systemd)
 **/
export const EXIT_SECCOMP: ExitCode = 228;

/**
 * Determining or changing SELinux context failed. See SELinuxContext= above. (systemd)
 **/
export const EXIT_SELINUX_CONTEXT: ExitCode = 229;

/**
 * Failed to set up an execution domain (personality). See Personality= above. (systemd)
 **/
export const EXIT_PERSONALITY: ExitCode = 230;

/**
 * Failed to prepare changing AppArmor profile. See AppArmorProfile= above. (systemd)
 **/
export const EXIT_APPARMOR_PROFILE: ExitCode = 231;

/**
 * Failed to restrict address families. See RestrictAddressFamilies= above. (systemd)
 **/
export const EXIT_ADDRESS_FAMILIES: ExitCode = 232;

/**
 * Setting up runtime directory failed. See RuntimeDirectory= and related settings above. (systemd)
 **/
export const EXIT_RUNTIME_DIRECTORY: ExitCode = 233;

/**
 * Failed to adjust socket ownership. Used for socket units only. (systemd)
 **/
export const EXIT_CHOWN: ExitCode = 235;

/**
 * Failed to set SMACK label. See SmackProcessLabel= above. (systemd)
 **/
export const EXIT_SMACK_PROCESS_LABEL: ExitCode = 236;

/**
 * Failed to set up kernel keyring. (systemd)
 **/
export const EXIT_KEYRING: ExitCode = 237;

/**
 * Failed to set up unit's state directory. See StateDirectory= above. (systemd)
 **/
export const EXIT_STATE_DIRECTORY: ExitCode = 238;

/**
 * Failed to set up unit's cache directory. See CacheDirectory= above. (systemd)
 **/
export const EXIT_CACHE_DIRECTORY: ExitCode = 239;

/**
 * Failed to set up unit's logging directory. See LogsDirectory= above. (systemd)
 **/
export const EXIT_LOGS_DIRECTORY: ExitCode = 240;

/**
 * Failed to set up unit's configuration directory. See ConfigurationDirectory= above. (systemd)
 **/
export const EXIT_CONFIGURATION_DIRECTORY: ExitCode = 241;
