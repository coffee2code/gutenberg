/**
 * Internal dependencies
 */
import {
	toggleEditorPanelEnabled,
	toggleEditorPanelOpened,
	removeEditorPanel,
	openPublishSidebar,
	closePublishSidebar,
	togglePublishSidebar,
	openModal,
	closeModal,
	toggleFeature,
	requestMetaBoxUpdates,
	openEntitiesSavedStates,
	closeEntitiesSavedStates,
} from '../actions';

describe( 'actions', () => {
	describe( 'openPublishSidebar', () => {
		it( 'should return an OPEN_PUBLISH_SIDEBAR action', () => {
			expect( openPublishSidebar() ).toEqual( {
				type: 'OPEN_PUBLISH_SIDEBAR',
			} );
		} );
	} );

	describe( 'closePublishSidebar', () => {
		it( 'should return an CLOSE_PUBLISH_SIDEBAR action', () => {
			expect( closePublishSidebar() ).toEqual( {
				type: 'CLOSE_PUBLISH_SIDEBAR',
			} );
		} );
	} );

	describe( 'togglePublishSidebar', () => {
		it( 'should return an TOGGLE_PUBLISH_SIDEBAR action', () => {
			expect( togglePublishSidebar() ).toEqual( {
				type: 'TOGGLE_PUBLISH_SIDEBAR',
			} );
		} );
	} );

	describe( 'removeEditorPanel', () => {
		it( 'should return a REMOVE_PANEL action', () => {
			expect( removeEditorPanel( 'post-status' ) ).toEqual( {
				type: 'REMOVE_PANEL',
				panelName: 'post-status',
			} );
		} );
	} );

	describe( 'toggleEditorPanelEnabled', () => {
		it( 'should return a TOGGLE_PANEL_ENABLED action', () => {
			expect( toggleEditorPanelEnabled( 'post-status' ) ).toEqual( {
				type: 'TOGGLE_PANEL_ENABLED',
				panelName: 'post-status',
			} );
		} );
	} );

	describe( 'toggleEditorPanelOpened', () => {
		it( 'should return a TOGGLE_PANEL_OPENED action', () => {
			expect( toggleEditorPanelOpened( 'post-status' ) ).toEqual( {
				type: 'TOGGLE_PANEL_OPENED',
				panelName: 'post-status',
			} );
		} );
	} );

	describe( 'openModal', () => {
		it( 'should return OPEN_MODAL action', () => {
			const name = 'plugin/my-name';
			expect( openModal( name ) ).toEqual( {
				type: 'OPEN_MODAL',
				name,
			} );
		} );
	} );

	describe( 'closeModal', () => {
		it( 'should return CLOSE_MODAL action', () => {
			expect( closeModal() ).toEqual( {
				type: 'CLOSE_MODAL',
			} );
		} );
	} );

	describe( 'toggleFeature', () => {
		it( 'should return TOGGLE_FEATURE action', () => {
			const feature = 'name';
			expect( toggleFeature( feature ) ).toEqual( {
				type: 'TOGGLE_FEATURE',
				feature,
			} );
		} );
	} );

	describe( 'requestMetaBoxUpdates', () => {
		it( 'should return the REQUEST_META_BOX_UPDATES action', () => {
			expect( requestMetaBoxUpdates() ).toEqual( {
				type: 'REQUEST_META_BOX_UPDATES',
			} );
		} );
	} );

	describe( 'openEntitiesSavedStates', () => {
		it( 'should return OPEN_ENTITIES_SAVED_STATES action', () => {
			const result = openEntitiesSavedStates( 'test' );
			expect( result ).toEqual( {
				type: 'OPEN_ENTITIES_SAVED_STATES',
				onRequestClose: 'test',
			} );
		} );
	} );

	describe( 'closeEntitiesSavedStates', () => {
		it( 'should return CLOSE_ENTITIES_SAVED_STATES action', () => {
			const result = closeEntitiesSavedStates( 'test' );
			expect( result ).toEqual( {
				type: 'CLOSE_ENTITIES_SAVED_STATES',
				callbackArg: 'test',
			} );
		} );
	} );
} );
