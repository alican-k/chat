import color from './color'

export const base = {
	height: 50,
	borderColor: color.GREY_LIGHT,
	borderWidth: 1,
	borderRadius: 25,
	backgroundColor: color.GREY_LIGHTEST,
	paddingHorizontal: 12,
}
export const active = {
	borderColor: color.DARK_LIGHT,
	backgroundColor: color.GREY_LIGHTEST,
}
export const error = {
	borderColor: color.ERROR_LIGHT,
	backgroundColor: color.ERROR_LIGHT
}
export const errorActive = {
	borderColor: color.ERROR,
}
