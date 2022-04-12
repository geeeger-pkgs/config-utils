import fs from 'fs-extra'

const name = process.argv[2]

const templateSource = 'local-http-code-cn'

if (fs.existsSync(`./packages/${name}`)) {
    console.log(`${name} 已存在`)
    process.exit(1)
}

function toJSON(str) {
    return JSON.parse(str)
}

function readJSON(file) {
    return toJSON(fs.readFileSync(file, 'utf8'))
}

const toString = Object.prototype.toString

function isObject(obj) {
    return toString.call(obj) === '[object Object]' && obj
}

function jsonModifier(json, modifyMap) {
    Object.keys(modifyMap).forEach(key => {
        const res = modifyMap[key]
        if (isObject(res)) {
            jsonModifier(json[key], res)
        } else {
            json[key] = res
        }
    })
}

function writeJSON(file, modifyMap) {
    const json = readJSON(file)
    jsonModifier(json, modifyMap)
    fs.writeFileSync(file, JSON.stringify(json, null, 2))
}

fs.copySync(`./packages/${templateSource}`, `./packages/${name}`)

fs.removeSync(`./packages/${name}/lib`)

fs.writeFileSync(`./packages/${name}/src/index.ts`, `export default {}`)

writeJSON(`./packages/${name}/package.json`, {
    description: "some_description",
    name: `@geeeger/${name}`,
})

writeJSON(`./packages/${name}/package-lock.json`, {
    name: `@geeeger/${name}`,
    packages: {
        "": {
			"name": `@geeeger/${name}`
		}
    }
})