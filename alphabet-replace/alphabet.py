def alphabet_position(text):
	result = ""
	for l in text:
		code = ord(l)
		if 65 <= code <= 90:
			result = result + f"{code - 64} "
		if 97 <= code <= 122:
			result = result + f"{code - 96} "
	return result[:-1]

