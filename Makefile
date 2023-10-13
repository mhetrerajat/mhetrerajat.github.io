.PHONY: generate

generate:
	python loconotion config/mhetrerajat.toml --chromedriver /usr/local/bin/chromedriver --clean --dark-theme
