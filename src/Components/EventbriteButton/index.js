import React from "react";
import PropTypes from "prop-types";
import { Button } from "../";
import { v4 as uuid } from "uuid";

export default class EventbriteButton extends React.Component {
	state = { isEventbriteLoaded: false };

	/** @type {string} */
	elementId = uuid();

	/** @type {string} */
	get scriptId() {
		return `eb-script-${this.elementId}`;
	}

	/** @type {string} */
	get buttonId() {
		return `eb-button-${this.elementId}`;
	}

	/** @returns {Promise<{ createWidget: Function }>} */
	fetchEBWidgets = () =>
		new Promise((resolve, reject) => {
			if (window.EBWidgets) {
				return resolve(window.EBWidgets);
			}

			const { ebScriptPath } = this.props;
			const script = document.createElement("script");
			script.id = this.scriptId;
			script.async = true;
			script.src = ebScriptPath;
			script.addEventListener("load", () => resolve(window.EBWidgets));

			/** @param {Error} e */
			const handleErr = (e) => {
				console.error(`Failed to load Eventbrite script from ${ebScriptPath}`);
				reject(e);
			};
			script.addEventListener("error", handleErr);
			script.addEventListener("abort", handleErr);

			document.head.appendChild(script);
		});

	handleClick = (e) => {
		if (this.props.onClick) {
			this.props.onClick(e);
		}

		if (this.state.isEventbriteLoaded) {
			return;
		}
		const url = `https://www.eventbrite.com/e/${this.props.ebEventId}`;
		window.open(url, "_blank");
	};

	/** @returns {Promise<void>} */
	async componentDidMount() {
		await !this.props.isLoading;
		try {
			const EBWidgets = await this.fetchEBWidgets();

			EBWidgets.createWidget({
				widgetType: "checkout",
				eventId: this.props.ebEventId,
				modal: this.props.isModal,
				modalTriggerElementId: this.buttonId,
				onOrderComplete: this.props.onOrderComplete,
			});

			this.setState({ isEventbriteLoaded: true });
		} catch (e) {
			this.setState({ isEventbriteLoaded: false });
		}
	}

	componentWillUnmount() {
		const script = document.getElementById(this.scriptId);

		if (script) {
			script.remove();
		}
	}

	render() {
		const { children, classNames } = this.props;

		return (
			<Button
				className={classNames}
				id={this.buttonId}
				disabled={this.props.isLoading}
				handleClick={!this.props.isLoading ? this.handleClick : null}
				style={{ textTransform: "capitalize" }}
			>
				{children}
			</Button>
		);
	}

	static propTypes = {
		className: PropTypes.string,
		ebEventId: PropTypes.string.isRequired,
		ebScriptPath: PropTypes.string,
		isModal: PropTypes.bool,
		onOrderComplete: PropTypes.func,
		onClick: PropTypes.func,

		componentProps: PropTypes.shape({}),
	};

	static defaultProps = {
		className: "",
		ebScriptPath: "https://www.eventbrite.com/static/widgets/eb_widgets.js",
		isModal: true,
		onOrderComplete: () => {},

		componentProps: {},
	};
}
