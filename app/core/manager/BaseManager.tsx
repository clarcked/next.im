import React from "react";
import merge from "deepmerge";

const BaseManager = (Enhanced, options: any) =>
    class Manager extends React.Component<any, any> {
        constructor(props: any) {
            super({ ...props, ...options });
            this.state = {
                is_loading: false,
                selected: null,
                error: null,
                dependencies: null,
            };
        }
        async componentDidMount() {
            const { on_mount } = this.props;
            if (typeof on_mount === "function") {
                await on_mount();
            }
            await this.load_dependencies();
        }
        async componentWillUnmount() {
            const { on_unmount } = this.props;
            if (typeof on_unmount === "function") {
                await on_unmount();
            }
        }

        async load_dependencies() {
            const { load_dependencies } = this.props;
            if (typeof load_dependencies === "function") {
                const dependencies = await load_dependencies();
                this.setState({ dependencies });
            }
        }

        error(e: any) {
            this.setState({ error: e });
        }

        async pre_persist(arg?: any) {
            const { pre_persist } = this.props;
            if (typeof pre_persist === "function") {
                return await pre_persist(arg);
            }
            return null;
        }
        async pre_update(arg?: any) {
            const { pre_update } = this.props;
            if (typeof pre_update === "function") {
                return await pre_update(arg);
            }
            return null;
        }
        async post_persist(arg: any) {
            const { post_persist } = this.props;
            if (typeof post_persist === "function") {
                return await post_persist(arg);
            }
            return null;
        }
        async post_update(arg: any) {
            const { post_update } = this.props;
            if (typeof post_update === "function") {
                return await post_update(arg);
            }
            return null;
        }

        async post_remove(arg: any) {
            const { post_remove } = this.props;
            if (typeof post_remove === "function") {
                return await post_remove(arg);
            }
            return null;
        }

        can_query() {
            let is_ok = true;
            const { model } = this.props;
            is_ok = typeof model === "object";
            return is_ok;
        }

        can_create(arg: any) {
            let is_ok = this.can_query();
            is_ok = typeof arg === "object";
            return is_ok;
        }

        can_update(arg: any) {
            let is_ok = this.can_create(arg);
            is_ok = typeof arg?.id === "string";
            return is_ok;
        }

        async list() {
            if (this.can_query()) {
                const { model } = this.props;
                const data = await model?.list();
                return data;
            }
        }
        async find(arg: any) {
            if (this.can_query()) {
                const { model } = this.props;
                const data = await model?.find(arg);
                return data;
            }
        }
        async create(arg: any) {
            if (this.can_create(arg)) {
                const { model } = this.props;
                const next = await this.pre_persist(arg);
                const data = await model?.create(merge(arg, next));
                const after = await this.post_persist(data);
                return merge(data, after);
            }
        }
        async update(arg: any) {
            if (this.can_update(arg)) {
                const { model } = this.props;
                const next = await this.pre_update(arg);
                const data = await model?.update(merge(arg, next));
                const after = await this.post_update(data);
                return merge(data, after);
            }
        }
        async remove(arg: any) {
            if (this.can_update(arg)) {
                const { model } = this.props;
                const data = await model?.delete(arg);
                const after = await this.post_remove(data);
                return merge(data, after);
            }
        }

        async submit(data: any) {
            const { selected } = this.state;
            return selected?.id ? await this.update(merge(selected, data)) : await this.create(data);
        }

        select(arg: any) {
            if (arg) this.setState({ selected: arg });
        }

        clear() {
            this.setState({ selected: null });
        }

        render() {
            return (
                <Enhanced
                    {...this.props}
                    {...this.state}
                    set_error={this.error.bind(this)}
                    clear={this.clear.bind(this)}
                    select={this.select.bind(this)}
                    submit={this.submit.bind(this)}
                    list={this.list.bind(this)}
                    find={this.find.bind(this)}
                    create={this.create.bind(this)}
                    update={this.update.bind(this)}
                    remove={this.remove.bind(this)}
                />
            );
        }
    };

export default BaseManager;
