import classnames from "classnames";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-700 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-600 bg-yellow-400 text-white': warning,
        'border-red-700 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-600': outline && primary,
        'text-gray-700': outline && secondary,
        'text-green-800': outline && success,
        'text-yellow-700': outline && warning,
        'text-red-700': outline && danger,
    });

    return <button {...rest} className={classes}>{children }</button>
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!warning) +
        Number(!!success) +
        Number(!!danger);

        if (count > 1) {
         return new Error('Only one of primary, secondary, warning, danger can be true')
        }
    }
};

export default Button;