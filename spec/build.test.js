import { execa } from "execa";
import * as fs from "fs";

const cli = (argv = "") => new Promise((resolve, reject) => {
    const subprocess = execa(`node ./cli.js ${argv}`)
    subprocess.stdout.pipe(process.stdout)
    subprocess.stderr.pipe(process.stderr)
    Promise.resolve(subprocess).then(resolve)
  });

describe('npm run build', () => {
    it('outputs a scss file', async() => {
        // run build
        await cli('npm run build');

        // expect file exists
        expect(fs.existsSync('./build/scss/_variables.scss')).toBe(true);
    });
});