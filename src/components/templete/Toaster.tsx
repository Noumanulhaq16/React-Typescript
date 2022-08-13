type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center'
}
export const Toaster = ({ position }: ToastProps) => {
    return (
        <div>
            Toast Notifaction -{position}
        </div>
    )
}

