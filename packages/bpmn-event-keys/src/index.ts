export default {
    diagram: {
        init: 'diagram.init',
        destroy: 'diagram.destroy',
        clear: 'diagram.clear',
    },
    render: {
        shape: 'render.shape',
        connection: 'render.connection',
        getShapePath: 'render.getShapePath',
        getConnectionPath: 'render.getConnectionPath',
    },
    shape: {
        added: 'shape.added',
        removed: 'shape.removed',
        changed: 'shape.changed',
        remove: 'shape.remove',
        move: {
            init: 'shape.move.init',
            end: 'shape.move.end',
            start: 'shape.move.start',
            move: 'shape.move.move',
            hover: 'shape.move.hover',
            rejected: 'shape.move.rejected',
            out: 'shape.move.out',
            cleanup: 'shape.move.cleanup',
        }
    },
    globalConnect: {
        hover: 'global-connect.hover',
        out: 'global-connect.out',
        end: 'global-connect.end',
        cleanup: 'global-connect.cleanup',
        init: 'global-connect.init',
        ended: 'global-connect.ended',
        canceled: 'global-connect.canceled',
        drag: {
            canceled: 'global-connect.drag.canceled',
        }
    },
    connection: {
        added: 'connection.added',
        removed: 'connection.removed',
        changed: 'connection.changed',
        remove: 'connection.remove',
    },
    connect: {
        end: 'connect.end',
        move: 'connect.move',
        hover: 'connect.hover',
        out: 'connect.out',
        cleanup: 'connect.cleanup',
        start: 'connect.start',
    },
    toolManager: {
        update: 'tool-manager.update',
    },
    i18n: {
        changed: 'i18n.changed',
    },
    drag: {
        move: 'drag.move',
        start: 'drag.start',
        init: 'drag.init',
        cleanup: 'drag.cleanup',
    },
    contextPad: {
        create: 'contextPad.create',
        getProviders: 'contextPad.getProviders',
    },
    elements: {
        changed: 'elements.changed',
        delete: 'elements.delete',
        paste: {
            rejected: 'elements.paste.rejected',
        }
    },
    palette: {
        create: 'palette.create',
        getProviders: 'palette.getProviders',
    },
    propertiesPanel: {
        isEntryVisible: 'propertiesPanel.isEntryVisible',
        isPropertyEditable: 'propertiesPanel.isPropertyEditable',
        changed: 'propertiesPanel.changed',
        resized: 'propertiesPanel.resized',
    },
    elementTemplates: {
        changed: 'elementTemplates.changed',
    },
    root: {
        added: 'root.added',
    },
    autoPlace: {
        end: 'autoPlace.end',
    },
    autoPlaceEvent: 'autoPlace',
    element: {
        hover: 'element.hover',
        out: 'element.out',
        click: 'element.click',
        changed: 'element.changed',
        marker: {
            update: 'element.marker.update',
        },
        mousedown: 'element.mousedown',
        mousemove: 'element.mousemove',
        updatId: 'element.updateId',
    },
    saveXML: {
        start: 'saveXML.start',
    },
    commandStack: {
        changed: 'commandStack.changed',
        canvas: {
            updateRoot: {
                executed: 'commandStack.connection.updateRoot.executed',
                reverted: 'commandStack.connection.updateRoot.reverted',
                postExecute: 'commandStack.connection.updateRoot.postExecute',
                preExecute: 'commandStack.connection.updateRoot.preExecute',
            },
        },
        spaceTool: {
            preExecute: 'commandStack.spaceTool.preExecute',
            postExecuted: 'commandStack.spaceTool.postExecuted',
        },
        lane: {
            add: {
                preExecute: 'commandStack.lane.add.preExecute',
                postExecuted: 'commandStack.lane.add.postExecuted',
            },
            resize: {
                preExecute: 'commandStack.lane.resize.preExecute',
                postExecuted: 'commandStack.lane.resize.postExecuted',
            },
            split: {
                preExecute: 'commandStack.lane.split.preExecute',
                postExecuted: 'commandStack.lane.split.postExecuted',
            }
        },
        connection: {
            start: {
                canExecute: 'commandStack.connection.start.canExecute',
            },
            move: {
                executed: 'commandStack.connection.move.executed',
                reverted: 'commandStack.connection.move.reverted',
                preExecute: 'commandStack.connection.move.preExecute',
            },
            delete: {
                executed: 'commandStack.connection.delete.executed',
                reverted: 'commandStack.connection.delete.reverted',
                preExecute: 'commandStack.connection.delete.preExecute',
            },
            create: {
                preExecuted: 'commandStack.connection.create.preExecuted',
                executed: 'commandStack.connection.create.executed',
                postExecuted: 'commandStack.connection.create.postExecuted',
                canExecute: 'commandStack.connection.create.canExecute',
                reverted: 'commandStack.connection.create.reverted',
                preExecute: 'commandStack.connection.create.preExecute',
            },
            reconnect: {
                postExecute: 'commandStack.connection.reconnect.postExecute',
                canExecute: 'commandStack.connection.reconnect.canExecute',
                executed: 'commandStack.connection.reconnect.executed',
                reverted: 'commandStack.connection.reconnect.reverted',
                preExecute: 'commandStack.connection.reconnect.preExecute',
            },
            updateWaypoints: {
                postExecuted: 'commandStack.connection.updateWaypoints.postExecuted',
                canExecute: 'commandStack.connection.updateWaypoints.canExecute',
                executed: 'commandStack.connection.updateWaypoints.executed',
                reverted: 'commandStack.connection.updateWaypoints.reverted',
                postExecute: 'commandStack.connection.updateWaypoints.postExecute',
            },
            layout: {
                executed: 'commandStack.connection.layout.executed',
                postExecuted: 'commandStack.connection.layout.postExecuted',
                reverted: 'commandStack.connection.layout.reverted',
                postExecute: 'commandStack.connection.layout.postExecute',
            },
        },
        shape: {
            resize: {
                preExecute: 'commandStack.shape.resize.preExecute',
                canExecute: 'commandStack.shape.resize.canExecute',
                postExecuted: 'commandStack.shape.resize.postExecuted',
                executed: 'commandStack.shape.resize.executed',
                reverted: 'commandStack.shape.resize.reverted',
                postExecute: 'commandStack.shape.resize.postExecute',
            },
            attach: {
                canExecute: 'commandStack.shape.attach.canExecute',
            },
            append: {
                preExecute: 'commandStack.shape.append.preExecute',
            },
            move: {
                postExecute: 'commandStack.shape.move.postExecute',
                executed: 'commandStack.shape.move.executed',
                reverted: 'commandStack.shape.move.reverted',
                preExecute: 'commandStack.shape.move.preExecute',
                postExecuted: 'commandStack.shape.move.postExecuted',
            },
            delete: {
                executed: 'commandStack.shape.delete.executed',
                reverted: 'commandStack.shape.delete.reverted',
                postExecute: 'commandStack.shape.delete.postExecute',
                postExecuted: 'commandStack.shape.delete.postExecuted',
                preExecute: 'commandStack.shape.delete.preExecute',
                execute: 'commandStack.shape.delete.execute',
                revert: 'commandStack.shape.delete.revert',
            },
            create: {
                postExecute: 'commandStack.shape.create.postExecute',
                revert: 'commandStack.shape.create.revert',
                execute: 'commandStack.shape.create.execute',
                preExecute: 'commandStack.shape.create.preExecute',
                reverted: 'commandStack.shape.create.reverted',
                executed: 'commandStack.shape.create.executed',
                postExecuted: 'commandStack.shape.create.postExecuted',
            },
            toggleCollapse: {
                postExecuted: 'commandStack.shape.toggleCollapse.postExecuted',
                executed: 'commandStack.shape.toggleCollapse.executed',
                reverted: 'commandStack.shape.toggleCollapse.reverted',
            },
            replace: {
                preExecuted: 'commandStack.shape.replace.preExecuted',
                postExecute: 'commandStack.shape.replace.postExecute',
                postExecuted: 'commandStack.shape.replace.postExecuted',
            }
        },
        elements: {
            create: {
                postExecuted: 'commandStack.elements.create.postExecuted',
                canExecute: 'commandStack.elements.create.canExecute',
                preExecute: 'commandStack.elements.create.preExecute',
                revert: 'commandStack.elements.create.revert',
                postExecute: 'commandStack.elements.create.postExecute',
            },
            move: {
                preExecute: 'commandStack.elements.move.preExecute',
                postExecuted: 'commandStack.elements.move.postExecuted',
                preExecuted: 'commandStack.elements.move.preExecuted',
            },
            updateProperties: {
                postExecuted: 'commandStack.elements.updateProperties.postExecuted',
            },
            delete: {
                preExecute: 'commandStack.elements.delete.preExecute',
                postExecuted: 'commandStack.elements.delete.postExecuted',
            }
        },
        element: {
            copy: {
                canExecute: 'commandStack.element.copy.canExecute',
            },
            autoResize: {
                canExecute: 'commandStack.element.autoResize.canExecute',
            },
            updateAttachment: {
                executed: 'commandStack.element.updateAttachment.executed',
                reverted: 'commandStack.element.updateAttachment.reverted',
            },
            updateProperties: {
                postExecute: 'commandStack.element.updateProperties.postExecute',
            }
        },
        label: {
            create: {
                postExecute: 'commandStack.label.create.postExecute',
                postExecuted: 'commandStack.label.create.postExecuted',
            }
        }
    },
    bendpoint: {
        move: {
            hover: 'bendpoint.move.hover',
            out: 'bendpoint.move.out',
            cleanup: 'bendpoint.move.cleanup',
            end: 'bendpoint.move.end',
            move: 'bendpoint.move.move',
            start: 'bendpoint.move.start',
            cancel: 'bendpoint.move.cancel',
        }
    },
    connectionSegment: {
        move: {
            hover: 'connectionSegment.move.hover',
            out: 'connectionSegment.move.out',
            cleanup: 'connectionSegment.move.cleanup',
            start: 'connectionSegment.move.start',
            move: 'connectionSegment.move.move',
            cancel: 'connectionSegment.move.cancel',
            end: 'connectionSegment.move.end',
        }
    },
    attach: "attach",
    detach: "detach",
    selection: {
        changed: 'selection.changed',
    },
    canvas: {
        destroy: 'canvas.destroy',
        init: 'canvas.init',
        resized: 'canvas.resized',
        viewbox: {
            changed: 'canvas.viewbox.changed',
            changing: 'canvas.viewbox.changing',
        }
    },
    import: {
        parse: {
            complete: 'import.parse.complete',
        }
    },
    create: {
        end: 'create.end',
        init: 'create.init',
        move: 'create.move',
        hover: 'create.hover',
        out: 'create.out',
        start: 'create.start',
        cleanup: 'create.cleanup',
        rejected: 'create.rejected',
    },
    interactionEvents: {
        createHit: 'interactionEvents.createHit',
        updateHit: 'interactionEvents.updateHit',
    },
    editorActions: {
        init: 'editorActions.init',
    },
    keyboard: {
        keydown: 'keyboard.keydown',
    },
    copyPaste: {
        copyElement: 'copyPaste.copyElement',
        pasteElements: 'copyPaste.pasteElements',
    },
    moddleCopy: {
        canCopyProperties: 'moddleCopy.canCopyProperties',
        canCopyProperty: 'moddleCopy.canCopyProperty',
        canSetCopiedProperty: 'moddleCopy.canSetCopiedProperty',
        pasteElement: 'moddleCopy.pasteElement',
    },
    popupMenu: {
        getProviders: {
            bpmnReplace: 'popupMenu.getProviders.bpmn-replace',
        }
    },
    resize: {
        move: 'resize.move',
        end: 'resize.end',
        start: 'resize.start',
        cleanup: 'resize.cleanup',
    },
    spaceTool: {
        end: 'spaceTool.end',
        move: 'spaceTool.move',
        selection: {
            init: 'spaceTool.selection.init',
            ended: 'spaceTool.selection.ended',
            canceled: 'spaceTool.selection.canceled',
            end: 'spaceTool.selection.end',
            start: 'spaceTool.selection.start',
            move: 'spaceTool.selection.move',
            cleanup: 'spaceTool.selection.cleanup',
        },
        ended: 'spaceTool.ended',
        canceled: 'spaceTool.canceled',
        getMinDimensions: 'spaceTool.getMinDimensions',
        cleanup: 'spaceTool.cleanup',
    },
    lasso: {
        selection: {
            init: 'lasso.selection.init',
            ended: 'lasso.selection.ended',
            canceled: 'lasso.selection.canceled',
            end: 'lasso.selection.end',
        },
        ended: 'lasso.ended',
        canceled: 'lasso.canceled',
        end: 'lasso.end',
        start: 'lasso.start',
        move: 'lasso.move',
        cleanup: 'lasso.cleanup',
    },
    hand: {
        init: 'hand.init',
        ended: 'hand.ended',
        canceled: 'hand.canceled',
        end: 'hand.end',
        move: {
            ended: 'hand.move.ended',
            canceled: 'hand.move.canceled',
            end: 'hand.move.end',
            move: 'hand.move.move',
        }
    },
    directEditing: {
        activate: 'directEditing.activate',
        resize: 'directEditing.resize',
        complete: 'directEditing.complete',
        cancel: 'directEditing.cancel',
    },
    bpmnElement: {
        added: 'bpmnElement.added',
    }
}