type Modifiers = (
    | {
          [key: string]: boolean | null | undefined
      }
    | string
    | false
    | null
    | undefined
)[]

function concat(classes1: string, classes2: string | false | null | undefined) {
    return classes2 ? `${classes1} ${classes2}` : classes1
}

function kebabize(camelCaseString: string): string {
    return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function transformModifiers(modifiers: Modifiers, func: (a: string) => string) {
    const a = []
    for (let b = 0; b < modifiers.length; b++) {
        const c = modifiers[b]
        if (c) {
            if (typeof c === "object" && c !== null) {
                const d = Object.entries(c)
                for (let e = 0; e < d.length; e++) {
                    const [f, g] = d[e]
                    if (g) {
                        a.push(func(f))
                    }
                }
            } else {
                a.push(func(c))
            }
        }
    }
    return a.join(" ")
}

export default function component(
    className: string | undefined,
    componentName: string,
    ...componentModifiers: Modifiers
) {
    componentName = kebabize(componentName)

    const componentModifiersClasses = transformModifiers(
        componentModifiers,
        (modifier) => `${componentName}--${kebabize(modifier)}`
    )

    return (elementName?: string, ...elementModifiers: Modifiers) => {
        if (!elementName) {
            return concat(
                kebabize(componentName),
                concat(componentModifiersClasses, className)
            )
        }

        elementName = kebabize(elementName)
        const elementSelector = `${componentName}__${elementName}`

        const elementModifiersClasses = transformModifiers(
            elementModifiers,
            (modifier) => {
                return `${elementSelector}--${kebabize(modifier)}`
            }
        )

        return concat(
            elementSelector,
            concat(componentModifiersClasses, elementModifiersClasses)
        )
    }
}
